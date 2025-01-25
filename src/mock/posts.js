export const posts = [
  {
    id: "1708632465282150796",
    type: "poll",
    content: `Okulun Yazılım kulübüne katılmayı düşünüyorum. Sizce kendimi geliştirmem açısından vs. iyi olur mu?`,
    poll: {
      voted: false,
      votes: 12,
      answers: [
        {
          id: 1,
          text: "Evet",
          votes: 8,
        },
        {
          id: 2,
          text: "Hayır",
          votes: 1,
        },
        {
          id: 3,
          text: "Girmedim, Bilmiyorum",
          votes: 3,
        },
      ],
    },
    account: {
      avatar: "https://placehold.co/40x40",
      username: "dou",
      fullName: "Süleyman Akyasan",
    },
    stats: {
      comments: 43535,
      like: 9466,
      bookmark: false,
    },
  },

  {
    id: "1708632465282150795",
    type: "photo",
    content: `İnsan hakları, insanlığın ortak mirası ve evrensel değerler
              sistemimizin temel taşıdır. Doğuş Üniversitesi olarak, daha adil
              ve eşit bir dünya inşa etmek için dayanışmayı önemsiyor ve bu
              sorumlulukla hareket ediyoruz. ⚖️`,
    photos: ["https://placehold.co/512x290"],
    account: {
      avatar: "https://placehold.co/40x40",
      username: "dou",
      fullName: "Doğuş Üniversitesi (DOU)",
      verified: true,
    },
    stats: {
      comments: 43535,
      like: 96946,
      bookmark: true,
    },
  },
];

export const profilePosts = [
  {
    id: "1708632465282150798",
    type: "photo",
    content: `Name ismiyle atılmış ikinci gönderi`,
    photos: ["https://placehold.co/512x290"],
    account: {
      avatar: "https://placehold.co/40x40",
      username: "name",
      fullName: "Name",
    },
    stats: {
      comments: 43535,
      like: 96946,
    },
  },
  {
    id: "1708632465282150797",
    type: "photo",
    content: `Name ismiyle atılmış ilk gönderi`,
    photos: ["https://placehold.co/512x290"],
    account: {
      avatar: "https://placehold.co/40x40",
      username: "name",
      fullName: "Name",
    },
    stats: {
      comments: 43535,
      like: 96946,
    },
  },
  {
    id: "1708632465282150792",
    type: "poll",
    content: `Name hesabıyla yapılmış ilk anket`,
    poll: {
      voted: true,
      votes: 12,
      answers: [
        {
          id: 1,
          text: "Evet",
          votes: 8,
        },
        {
          id: 2,
          text: "Hayır",
          votes: 1,
        },
        {
          id: 3,
          text: "Girmedim, Bilmiyorum",
          votes: 3,
        },
      ],
    },
    account: {
      avatar: "https://placehold.co/40x40",
      username: "name",
      fullName: "Name",
    },
    stats: {
      comments: 43535,
      like: 96946,
      bookmark: false,
    },
  },
];
