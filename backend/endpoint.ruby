require 'sinatra'
require 'json'

get '/pages/https://github.com/Sulaimannabdul/Linktree-2.0-maybe/blob/b4da00733551895411d8cefd9c7361c446797415/packagelock.json/:Sulaiman Abdul' do
  content_type :json
  links = https://github.com/Sulaimannabdul/Linktree-2.0-maybe/blob/b4da00733551895411d8cefd9c7361c446797415/packagelock.json(user_id: params[:user_id])
  links.to_json
end
