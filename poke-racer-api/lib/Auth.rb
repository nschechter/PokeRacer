class Auth
	def self.issue(payload)
		JWT.encode(payload, Rails.application.secrets.hmac_secret)
	end

	def self.decode(token)
		JWT.decode(token, Rails.application.secrets.hmac_secret)
	end
end