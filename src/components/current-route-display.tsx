import { useRouter } from "@/router";

export const CurrentRouteDisplay = () => {
  const { currentRoute } = useRouter();
  return (
    <div className="fixed right-0 bottom-0 left-0 px-4 py-2 text-center text-white bg-gray-800">
      Current Route: {currentRoute.route}
    </div>
  );
};
