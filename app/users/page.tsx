import EmptyState from "../components/EmptyState";

const Users = () => {
  // 基本的にはdispay:hidden, lg(>=1024px)の場合はdisplay:blockとなる
  return (
    <div
      className="
        hidden
        lg:block
        lg:pl-80
        h-full
      "
    >
      <EmptyState></EmptyState>
    </div>
  );
};

export default Users;
