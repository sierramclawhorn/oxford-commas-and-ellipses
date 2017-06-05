Rails.application.routes.draw do

	resources :posts
		get '/home' => 'posts#home'

	resources :users
  	get '/logout' => 'sessions#destroy'
  	get '/login' => 'sessions#new'
  	post '/login' => 'sessions#create'

	root 'posts#home'

end
