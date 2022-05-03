import { feedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface IFeedbackTypesProps {
  title: string;
  onFeedBackTypeChanged: (key: FeedbackType) => void;
}

export const FeedbackTypeStep: React.FC<IFeedbackTypesProps> = ({
  onFeedBackTypeChanged,
  title,
}: IFeedbackTypesProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6 flex items-center gap-2">
          {title}
        </span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedBackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span className="">{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
