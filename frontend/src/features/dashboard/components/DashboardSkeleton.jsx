import Skeleton from "../../../components/ui/Skeleton/Skeleton";
import Card from "../../../components/ui/Card/Card";

export default function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="flex items-center justify-between">
            <div className="space-y-3 flex-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-3 w-32" />
            </div>

            <Skeleton className="h-12 w-12 rounded-full" />
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <Skeleton className="h-72 w-full" />
        </Card>

        <Card>
          <Skeleton className="h-72 w-full" />
        </Card>
      </div>

      <Card>
        <Skeleton className="h-6 w-48 mb-6" />
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center py-3"
          >
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-24" />
            </div>

            <Skeleton className="h-5 w-20" />
          </div>
        ))}
      </Card>
    </div>
  );
}