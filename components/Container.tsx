function Container({ children }: { children: React.ReactNode }) {
  return <main className="px-8 md:max-w-7xl mx-auto w-full">{children}</main>;
}

export default Container;
