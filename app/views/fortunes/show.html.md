<%- model_class = Fortune -%>

<div id="notice" class="alert alert-success" role="alert"><%= notice %></div>

<%= @fortune.quotation %>

*<%= @fortune.source %>*

[Back](<%= fortunes_path %>) |
[Edit](<%= edit_fortune_path(@fortune) %>) |
<%= link_to 'Destroy', fortune_path(@fortune),
  method: :delete, data: { confirm: 'Are you sure?' },
  class: 'btn btn-danger' %>
