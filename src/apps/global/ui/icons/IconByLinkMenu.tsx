import { AssignmentIndRounded, AssignmentRounded } from "@mui/icons-material";
import { RouterPath } from "../../router";

type IconByLinkMenu = {
  link: RouterPath;
};

export const IconByLinkMenu = ({ link }: IconByLinkMenu) => {
  switch (link) {
    case RouterPath.Members:
      return <AssignmentIndRounded />;
    case RouterPath.Terms:
      return <AssignmentRounded />;
    default:
      return <div></div>;
  }
};
