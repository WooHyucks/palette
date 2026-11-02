import { getPreviewContent } from "@/data/preview-content";
import { CommerceTemplate } from "@/components/website-preview/templates/CommerceTemplate";
import { DigitalTemplate } from "@/components/website-preview/templates/DigitalTemplate";
import { FoodTemplate } from "@/components/website-preview/templates/FoodTemplate";
import { GeneralTemplate } from "@/components/website-preview/templates/GeneralTemplate";
import { ProfessionalTemplate } from "@/components/website-preview/templates/ProfessionalTemplate";
import { WellnessTemplate } from "@/components/website-preview/templates/WellnessTemplate";
import type { Palette, TemplateType } from "@/types/palette";

interface WebsitePreviewProps {
  palette: Palette;
  template: TemplateType;
  categoryId: string;
  subcategoryId?: string;
  mini?: boolean;
  framed?: boolean;
}

export function WebsitePreview({
  palette,
  template,
  categoryId,
  subcategoryId,
  mini = false,
  framed = false,
}: WebsitePreviewProps) {
  const content = getPreviewContent(categoryId, subcategoryId);

  const body = (
    <>
      {template === "store" && (
        <FoodTemplate palette={palette} content={content} mini={mini} />
      )}
      {template === "commerce" && (
        <CommerceTemplate palette={palette} content={content} mini={mini} />
      )}
      {template === "booking" && (
        <WellnessTemplate palette={palette} content={content} mini={mini} />
      )}
      {template === "professional" && (
        <ProfessionalTemplate palette={palette} content={content} mini={mini} />
      )}
      {template === "saas" && (
        <DigitalTemplate palette={palette} content={content} mini={mini} />
      )}
      {template === "general" && (
        <GeneralTemplate palette={palette} content={content} mini={mini} />
      )}
    </>
  );

  if (!framed) return body;

  return (
    <div className="preview-browser">
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span>
          {content.brand.toLowerCase().replace(/\s+/g, "")}.kr
        </span>
      </div>
      {body}
    </div>
  );
}
