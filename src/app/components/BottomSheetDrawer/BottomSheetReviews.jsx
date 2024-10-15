import CarouselDrawerReviews from "./CarouselDrawerReviews";

export default function BottomSheetReviews({ reviews }) {
  return (
    <div className="space-y-2 px-3 mb-9">
      <h2 className="text-md font-bold text-gray-800 mt-4 mb-2">Reviews</h2>
      {/* Swiper for Reviews */}
      <CarouselDrawerReviews options={reviews} />
    </div>
  );
}