import CarouselDrawerReviews from "../CarouselDrawerReviews";

export default function BottomSheetReviews({ reviews }) {
  return (
    <div className="space-y-2 px-1">
      <h2 className="text-md font-bold text-gray-600 mt-4 mb-2">Reviews</h2>
      {/* Swiper for Reviews */}
      <CarouselDrawerReviews options={reviews} />
    </div>
  );
}