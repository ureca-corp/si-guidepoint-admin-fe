import { LoginView } from "@/apps/auth/login/ui";
import { FramerTransitionLayout } from "@/apps/global/ui/layout";

export default function Page() {
  return (
    <FramerTransitionLayout>
      <LoginView />;
    </FramerTransitionLayout>
  );
}
