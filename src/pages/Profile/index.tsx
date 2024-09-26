// import { selectCurrentAuthUser } from "@api/data/authSlice";
// import { useGetUserQuery } from "@api/features/user.api";
// import Profile from "@components/schollar/Profile";
// import SchollarRightLayout from "@layouts/SchollarRightLayout";
// import { useSelector } from "react-redux";

// const ProfileTab = () => {
//   const currentUser = useSelector(selectCurrentAuthUser);
//   const { data: userRecord } = useGetUserQuery(currentUser.id);
//   const role = "currentUser";
//   return (
//     <SchollarRightLayout>
//       <Profile role={role} user={userRecord?.data} />
//     </SchollarRightLayout>
//   );
// };

// export default ProfileTab;


const index = () => {
  return (
    <div>profile</div>
  )
}

export default index
