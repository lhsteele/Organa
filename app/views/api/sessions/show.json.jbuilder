# json.extract! @user, :email, :id, :first_name, :last_name
json.partial! "api/sessions/session", user: @user
