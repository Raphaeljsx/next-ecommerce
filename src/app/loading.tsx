import SkeletonCard from "./components/SkeletonCard"

export default function loading(){
  return (
    <div className="container justify-center pt-8 px-8 xl:px-0">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
      <SkeletonCard isLoading/>
      <SkeletonCard isLoading/>
      <SkeletonCard isLoading/>
      <SkeletonCard isLoading/>
      <SkeletonCard isLoading/>
      <SkeletonCard isLoading/>
      <SkeletonCard isLoading/>
      <SkeletonCard isLoading/>
    </div>
  </div>
  )
}