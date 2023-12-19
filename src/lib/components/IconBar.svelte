<script lang="ts">
	import SocialIcons from '@rodneylab/svelte-social-icons';

	export let color: string;
</script>

<a href="https://open.spotify.com/artist/5PW7c0CLE6qx52kDdDgabk?si=XSxu6bZDQLmM93SjbaD2xQ">
	<SocialIcons network="spotify" fgColor={color} bgColor="transparent" width={40} height={40} />
</a>
<a href="https://www.youtube.com/channel/UCJPLOsCn6s3r7CFdAopIzNw">
	<SocialIcons network="youtube" fgColor={color} bgColor="transparent" width={40} height={40} />
</a>
<a href="https://www.instagram.com/thepaperearth">
	<SocialIcons network="instagram" fgColor={color} bgColor="transparent" width={40} height={40} />
</a>
