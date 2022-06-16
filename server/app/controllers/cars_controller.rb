class CarsController < ApplicationController
    def index
       @cars = Car.all
       respond_to do |format|
        format.json {render json: @cars}
       end 
    end

    def show 
        @car = Car.find_by(id:params[:id])
        if (!@car)
         render status: 404, json: @car
        else 
        respond_to do |format|
        format.json {render json: @car}
       end 
    end
    end
end