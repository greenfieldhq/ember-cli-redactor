class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :body, :title
end
