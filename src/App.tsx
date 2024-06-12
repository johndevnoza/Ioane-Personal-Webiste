import VolumeKnob from "@components/VolumeKnob";

function App() {
  console.log(window.innerWidth, window.innerHeight);

  return (
    <div className="h-screen bg-[url('/src/assets/images/background.jpg')] bg-cover bg-center">
      <VolumeKnob />
    </div>
  );
}

export default App;
