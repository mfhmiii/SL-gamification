ALTER TABLE "profile" RENAME TO "users";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "profile_user_id_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "profile_username_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "profile_email_unique";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_user_id_unique" UNIQUE("user_id");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");