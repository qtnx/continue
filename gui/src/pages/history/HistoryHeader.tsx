import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { lightGray, vscBackground } from "../../components";
import { useNavigationListener } from "../../hooks/useNavigationListener";
import { getFontSize } from "../../util";

export const HistoryHeader = () => {
  useNavigationListener();
  const navigate = useNavigate();

  return (
    <div
      className="sticky top-0 z-10"
      style={{ backgroundColor: vscBackground, fontSize: getFontSize() }}
    >
      <div
        className="m-0 flex items-center p-0"
        style={{
          borderBottom: `0.5px solid ${lightGray}`,
        }}
      >
        <ArrowLeftIcon
          width="1.2em"
          height="1.2em"
          onClick={() => navigate("/")}
          className="ml-4 inline-block cursor-pointer"
        />
        <span className="m-2 inline-block text-base font-bold">Chat</span>
      </div>
      {/* {workspacePaths && workspacePaths.length > 0 && (
      <CheckDiv
        checked={filteringByWorkspace}
        onClick={() => setFilteringByWorkspace((prev) => !prev)}
        title={`Show only sessions from ${lastPartOfPath(
          workspacePaths[workspacePaths.length - 1]
        )}/`}
      />
    )} */}
    </div>
  );
};
