ALTER TABLE "users" RENAME TO "profile";--> statement-breakpoint
ALTER TABLE "profile" DROP CONSTRAINT "users_user_id_unique";--> statement-breakpoint
ALTER TABLE "profile" DROP CONSTRAINT "users_username_unique";--> statement-breakpoint
ALTER TABLE "profile" DROP CONSTRAINT "users_email_unique";--> statement-breakpoint
ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_unique" UNIQUE("user_id");--> statement-breakpoint
ALTER TABLE "profile" ADD CONSTRAINT "profile_username_unique" UNIQUE("username");--> statement-breakpoint
ALTER TABLE "profile" ADD CONSTRAINT "profile_email_unique" UNIQUE("email");