import { useContext } from "react";
import appContext from "../../store/appcontext";

function NotFound() {
  const { error } = useContext(appContext);
  return (
    <>
      {error === "not-found" && (
        <div className="text-center flex flex-col gap-5">
          <p className="text-4xl">☹</p>
          <h1 className="text-2xl font-bold">Not Found!</h1>
          <p className="text-[#cecece]">
            sorry pal, we couldn't find definitions for the word you were
            looking for. You can try again at later time or head to the web
            instead
          </p>
        </div>
      )}
    </>
  );
}

export default NotFound;
