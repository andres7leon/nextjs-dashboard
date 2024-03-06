import { SimpleWidget } from "@/components";
import { WidgetsGrid } from '../../../components/WidgetsGrid';

export default function MainPage() {
  return (
    <div className="p-2">
      <h1>Dashboard</h1>
      <span> Informacion general</span>
      <WidgetsGrid />
    </div>
  );
}