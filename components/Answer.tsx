type AnswerProps = {
  children: string;
};

export default function Answer({ children }: AnswerProps) {
  return <p className="text-start text-base text-grayishPurple">{children}</p>;
}
