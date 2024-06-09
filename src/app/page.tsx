import Image from "next/image";

export default function Home() {
  return (
    <div className="container justify-center pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <p>Prod 1</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <p>Prod 2</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <p>Prod 3</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <p>Prod 4</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <p>Prod 5</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <p>Prod 6</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <p>Prod 7</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <p>Prod 8</p>
        </div>
      </div>
    </div>
  );
}
