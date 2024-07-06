interface InfoCardProps {
  readonly number: number;
  readonly title: string;
  readonly description: string;
}

export default function InfoCard(props : InfoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center max-w-[270px] min-h-72 justify-center gap-3">
      <div className="text-green-600 text-2xl font-bold">{props.number}</div>
      <h2 className="text-xl font-semibold mt-2">{props.title}</h2>
      <p className="text-gray-600 mt-2">{props.description}</p>
    </div>
  );
}