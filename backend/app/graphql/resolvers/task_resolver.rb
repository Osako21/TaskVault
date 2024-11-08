module Resolvers
  class TaskResolver < Resolvers::BaseResolver
    type Types::TaskType, null: false

    def resolve
      Task.all
    end
  end
end