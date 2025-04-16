interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="text-left tracking-wider h-[4rem] flex items-center p-3 text-2xl border-b-2">
      {title}
    </div>
  );
};

export default Header;
