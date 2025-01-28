import PropTypes from "prop-types";
import { useState } from "react";
import useVotePoll from "../../../hooks/useVotePoll";

export default function Poll({ poll: pollData }) {
  const [poll, setPoll] = useState({
    ...pollData,
    voted: pollData.answers.some((answer) => answer.isSelected), // Kullanıcının oy kullanıp kullanmadığını kontrol et
    votes: pollData.answers.reduce(
      (sum, answer) => sum + answer.answerCount,
      0
    ), // Toplam oy sayısını hesapla
  });

  const { mutate: votePoll } = useVotePoll({
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleVote = (answerId, answerIndex) => {
    if (poll.voted) return; // Zaten oy kullanılmışsa hiçbir şey yapma

    // Mutate'ye gereken bilgileri gönderiyoruz (answerIndex, pollId)
    votePoll({ answer_index: answerIndex, poll_id: poll.id });

    setPoll((prevPoll) => {
      const updatedAnswers = prevPoll.answers.map((answer) => {
        if (answer.id === answerId) {
          return {
            ...answer,
            answerCount: answer.answerCount + 1,
            isSelected: true,
          };
        }
        return answer;
      });

      const totalVotes = updatedAnswers.reduce(
        (sum, answer) => sum + answer.answerCount,
        0
      );

      return {
        ...prevPoll,
        voted: true,
        answers: updatedAnswers,
        votes: totalVotes,
      };
    });
  };

  return (
    <div className="w-full mt-3 grid gap-y-1.5">
      {!poll.voted &&
        poll.answers.map((answer) => (
          <button
            onClick={(e) => {
              handleVote(answer.id, answer.answerIndex);
              e.stopPropagation();
              e.preventDefault();
            }}
            className="h-8 border hover:bg-[color:var(--background-secondary)] border-[color:var(--color-primary)] rounded-full text-[color:var(--color-primary)] font-bold transition-colors"
            key={answer.id}
            disabled={poll.voted} // Oy kullanıldıysa butonu devre dışı bırak
          >
            {answer.text}
          </button>
        ))}
      {poll.voted &&
        poll.answers.map((answer) => (
          <div
            key={answer.id}
            className="h-8 flex items-center font-semibold justify-between relative overflow-hidden rounded-md px-2 z-[1] "
          >
            <div
              style={{ width: (answer.answerCount / poll.votes) * 100 + "%" }}
              className="absolute top-0 left-0 h-full bg-[color:var(--background-third)] opacity-80 z-[-1]"
            />
            <div className="flex items-center gap-2">
              <p className="">{answer.text}</p>
              {answer.isSelected && (
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 text-[color:var(--color-primary)]"
                  fill="currentColor"
                >
                  <path d="M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16.4 9.28l-5.21 7.15-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18z" />
                </svg>
              )}
            </div>
            <div className="">
              {"%" + ((answer.answerCount / poll.votes) * 100).toFixed(1)}
            </div>
          </div>
        ))}

      <div className="text-[color:var(--color-base-secondary)] mt-2 ">
        {poll.votes} oy *{" "}
        {Math.ceil(
          (new Date(poll.expirationDate) - new Date()) / (1000 * 60 * 60 * 24)
        )}{" "}
        gün kaldı
      </div>
    </div>
  );
}

Poll.propTypes = {
  poll: PropTypes.shape({
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        answerCount: PropTypes.number.isRequired,
        isSelected: PropTypes.bool.isRequired,
      })
    ).isRequired,
    expirationDate: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
  }).isRequired,
};
