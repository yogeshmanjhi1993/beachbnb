OmniAuth.config.logger = Rails.logger
OmniAuth.config.full_host = Rails.env.production? ? 'http://www.beachbnb.co' : 'http://localhost:3000'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['oauthid'], ENV['oauthsecret'], {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
