
##I added this file and method myself to make the params data being returned simpler. Ayeson did this in lecture 2 at 1:03:00

ActiveSupport.on_load(:action_controller) do
    wrap_parameters format: []
  end