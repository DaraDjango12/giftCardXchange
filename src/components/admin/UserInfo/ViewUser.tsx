import { selectCurrentAuthUser } from "@api/data/authSlice";
import { useGetUserQuery } from "@api/features/user.api";
import Profile from "@components/schollar/Profile";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const currentUser = useSelector(selectCurrentAuthUser);
  const role = currentUser.role;
  const { userId } = useParams();
  const { data: userRecord } = useGetUserQuery(userId);

  return (
    <div>
      <Profile role={role} user={userRecord?.data} />
    </div>
  );
};

export default ViewUser;
