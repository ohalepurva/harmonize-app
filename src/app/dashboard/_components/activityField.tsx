import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ActivityField = ({ label, value }: { label: string; value: string }) => {
  const isLongText = typeof value === "string" && value.length > 30;

  return (
    <div className={isLongText ? "row-span-2" : ""}>
      <Label className="text-left tracking-wider h-[2rem] p-0.5 text-base">
        {label}
      </Label>
      {isLongText ? (
        <Textarea disabled value={value} className="h-fit p-2" />
      ) : (
        <p className="mt-1 ml-1">{value}</p>
      )}
    </div>
  );
};

export default ActivityField;
