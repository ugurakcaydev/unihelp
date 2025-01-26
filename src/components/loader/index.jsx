import { ClipLoader } from "react-spinners";

function Loader({ isLoading, size = 20, ...rest }) {
  return (
    <ClipLoader
      loading={isLoading}
      size={size}
      speedMultiplier={0.8}
      aria-label="Loading Spinner"
      data-testid="loader"
      {...rest}
    />
  );
}

export default Loader;
