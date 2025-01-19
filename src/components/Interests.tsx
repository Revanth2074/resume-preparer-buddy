import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Interests = () => {
  const interests = ["Reading books", "Dancing", "Playing Carrom board", "coding"];

  return (
    <section className="mb-8">
      <h2 className="section-title flex items-center gap-2">
        <Heart className="w-5 h-5" />
        INTERESTS
      </h2>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <Badge key={interest} variant="outline" className="hover-scale">
            {interest}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Interests;