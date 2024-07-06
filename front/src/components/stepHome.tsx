import Image from 'next/image';

interface CardProps {
  readonly title: string;
  readonly step: string;
  readonly description: string;
  readonly image: any;
  readonly alt: string;
}

export default function CardComponent(props : CardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md max-w-[1400px]">
      <h2 className="font-bold text-lg mb-2">{props.title}</h2>
      <Image 
        src={props.image} 
        alt={props.alt} 
        width={100} 
        height={100} 
        className="mb-2"
      />
      <p className="text-sm text-gray-600 mb-4">{props.step}</p>
      <p>
        {props.description}
      </p>
    </div>
  );
}
