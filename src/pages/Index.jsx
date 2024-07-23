import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
      <p className="text-xl mb-8">This is a bare-bones application that you can modify and build upon.</p>
      <Button>Get Started</Button>
    </div>
  );
};

export default Index;