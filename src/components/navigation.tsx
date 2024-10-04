import { RouteNames, useRouter } from "@/router";

export const Navigation = () => {
  const { currentRoute, navigate } = useRouter();

  return (
    <div className="flex flex-col gap-2 mb-4 w-full">
      {Object.entries(RouteNames).map(([key, route]) => (
        <button
          key={key}
          className={`px-2 py-1 text-xs ${
            currentRoute.route === route
              ? "bg-blue-500 text-white"
              : "bg-neutral-900"
          }`}
          onClick={() => navigate({ route })}
        >
          {key.replace(/([A-Z])/g, " $1").trim()}
        </button>
      ))}
    </div>
  );
};
