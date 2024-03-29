import { RightDrawer } from "@myorg/shared/components";
import { UserForm } from "@myorg/user-form";
import { TransactionForm } from "@myorg/transaction-form";
import { useLocation } from "react-router-dom";

function DetailsDrawer() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <RightDrawer>
      { path === "users" ? <UserForm /> : <TransactionForm /> }
    </RightDrawer>
  );
}

export { DetailsDrawer };
