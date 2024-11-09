extends Node2D
class_name Ring2D

@export var ring_radius_outer := 100.0:
	get:
		return ring_radius_outer
	set(value):
		ring_radius_outer = value
		queue_redraw()

@export var ring_radius_inner := 50.0
@export var ring_segments := 512
@export var ring_color := Color(1, 1, 1, 1)

func _draw():
	var angle_step = TAU / ring_segments

	for i in range(ring_segments):
		var angle1 = angle_step * i
		var angle2 = angle_step * (i + 1)

		var outer_point1 = Vector2(ring_radius_outer * cos(angle1), ring_radius_outer * sin(angle1))
		var outer_point2 = Vector2(ring_radius_outer * cos(angle2), ring_radius_outer * sin(angle2))

		var inner_point1 = Vector2(ring_radius_inner * cos(angle1), ring_radius_inner * sin(angle1))
		var inner_point2 = Vector2(ring_radius_inner * cos(angle2), ring_radius_inner * sin(angle2))

		draw_polygon([outer_point1, outer_point2, inner_point2, inner_point1], [ring_color])
