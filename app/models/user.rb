# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, 
      uniqueness: true, 
      length: { in: 3..30 }, 
      format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
    validates :email, 
      uniqueness: true, 
      length: { in: 3..255 }, 
      format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..255 }, allow_nil: true

    has_many :cart_items,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Cart
    
    has_many :reviews,
    foreign_key: :user_id,
    class_name: :Review

    before_validation :ensure_session_token

    has_secure_password



    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        
        if user&.authenticate(password) 
            return user
        else
            nil 
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    private

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
  end
