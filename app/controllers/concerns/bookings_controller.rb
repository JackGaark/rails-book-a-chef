class BookingsController < ApplicationController
  before_action :set_listing, :set_user

  def index
  end

  def show
  end

  def new
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.listing = @listing
    @booking.user = @user
    if @booking.save!
      redirect_to root_path
    else
      render "new"
    end
  end

  def destroy
  end

  private

  def set_listing
    @listing = Listing.find(params[:listing_id])
  end

  def set_user
    @user = current_user
  end

  def booking_params
    params.require(:booking).permit(:listing_id, :user_id, :reservation_date, :reservation_time, :guests_count)
  end
end
