import { useNavigate } from "react-router-dom";



export function LogoIcon({ className }) {
  return (
    <svg
      className={`${className} text-black size-5`}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="384"
      height="384"
      viewBox="0 0 24 24"
    >
      <path d="M 12 2 C 11.846875 2 11.693234 2.0349687 11.552734 2.1054688 L 3.5527344 6.1054688 C 3.2137344 6.2744688 3 6.621 3 7 L 3 15.65625 C 3 15.99025 3.1673125 16.303281 3.4453125 16.488281 C 4.1103125 16.931281 5 16.45525 5 15.65625 L 5 7.6171875 L 12 4.1171875 L 19 7.6171875 L 19 15.681641 C 19 16.480641 19.889688 16.956672 20.554688 16.513672 C 20.832687 16.328672 21 16.016641 21 15.681641 L 21 7 C 21 6.621 20.786266 6.2744688 20.447266 6.1054688 L 12.447266 2.1054688 C 12.306266 2.0349687 12.153125 2 12 2 z M 9.0605469 9.0800781 C 8.8938125 9.0697344 8.7209375 9.1008437 8.5546875 9.1835938 C 8.2156875 9.3515937 8 9.699125 8 10.078125 L 8 19 C 8 19.334 8.1673125 19.647031 8.4453125 19.832031 L 11.445312 21.832031 C 11.781313 22.056031 12.219687 22.056031 12.554688 21.832031 L 15.554688 19.832031 C 15.833687 19.647031 16 19.334 16 19 L 16 10.078125 C 16 9.699125 15.784312 9.3525938 15.445312 9.1835938 C 14.780313 8.8525937 14 9.335125 14 10.078125 L 14 18.464844 L 12 19.798828 L 10 18.464844 L 10 10.078125 C 10 9.520875 9.56075 9.1111094 9.0605469 9.0800781 z"></path>
    </svg>
  );
}

export function EyeIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`${className} text-black size-5`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

export function CloseEyeIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`${className} text-black size-5`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
}

export function ReturnButton({ className }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="p-2 hover:bg-[color:var(--background-secondary)] rounded-full cursor-pointer -ml-2"
    >
      <svg viewBox="0 0 24 24" className={`${className} text-black size-5`}>
        <g>
          <path
            fill="currentColor"
            d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
          ></path>
        </g>
      </svg>
    </button>
  );
}

export function CheckedIcon({ className }) {
  return (
    <svg
      className={`${className} size-6 `}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
      />
    </svg>
  );
}

export function PenIcon({ className }) {
  return (
    <svg
      className={`${className} size-6 `}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
      />
    </svg>
  );
}

export function CameraIcon({ className }) {
  return (
    <svg
      className={`${className} size-6 `}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

export function XIcon({ className, onClick }) {
  return (
    <svg
      onClick={onClick}
      className={`${className} size-6 `}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18 17.94 6M18 18 6.06 6"
      />
    </svg>
  );
}


