OmniAuth.config.logger = Rails.logger
OmniAuth.config.full_host = Rails.env.production? ? 'http://www.beachbnb.co' : 'http://localhost:3000'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '395271017304-dnog3n8u9s5knshcapsba6tn52dr4efn.apps.googleusercontent.com', 'jxzp_1UayVr_h5m_XUP2MEjP', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
