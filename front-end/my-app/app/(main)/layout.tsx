const mainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-[100vh] overflow-hidden p-0 m-0 box-border">
      {children}
    </main>
  );
};

export default mainLayout;
