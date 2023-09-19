import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center">
      <Image
        className="rounded-full object-cover"
        width={150}
        height={150}
        src="https://i.ibb.co/XYJyrrT/Wechat-IMG6483.png"
        alt="Logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;