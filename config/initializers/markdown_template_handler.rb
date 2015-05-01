class MarkdownTemplateHandler
  def self.call(template)
    erb = ActionView::Template.registered_template_handler(:erb)
    source = erb.call(template)
    <<-SOURCE
    renderer = Redcarpet::Render::HTML.new
    options = { fenced_code_blocks: true }
    Redcarpet::Markdown.new(renderer, options).render(begin;#{source};end)
    SOURCE
  end
end
ActionView::Template.register_template_handler(:md, :markdown, MarkdownTemplateHandler)
