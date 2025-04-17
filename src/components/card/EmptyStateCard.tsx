import { BodyStrongText } from "../BodyStrongText";
import { Button } from "../Button";
import { Card } from "./Card";


type EmptyStateCardProps= {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}

export const EmptyStateCard = ({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateCardProps) => (
  <Card>
    <div className="flex flex-col items-center text-center py-12">
      <BodyStrongText>{title}</BodyStrongText>
      <p className="my-3">{description}</p>
      <Button onClick={onAction}>{actionLabel}</Button>
    </div>
  </Card>
);
