/**
 * Detect image MIME type from raw binary data magic bytes.
 * Falls back to "image/png" if unknown.
 */
export function detectImageMime(data: { [index: number]: number; length: number }): string {
	if (!data || data.length < 4) return "image/png";

	// JPEG: FF D8 FF
	if (data[0] === 0xff && data[1] === 0xd8 && data[2] === 0xff) {
		return "image/jpeg";
	}

	// PNG: 89 50 4E 47
	if (
		data[0] === 0x89 &&
		data[1] === 0x50 &&
		data[2] === 0x4e &&
		data[3] === 0x47
	) {
		return "image/png";
	}

	// GIF: 47 49 46
	if (data[0] === 0x47 && data[1] === 0x49 && data[2] === 0x46) {
		return "image/gif";
	}

	// WebP: RIFF .... WEBP at offset 8
	if (
		data.length >= 12 &&
		data[0] === 0x52 &&
		data[1] === 0x49 &&
		data[2] === 0x46 &&
		data[3] === 0x46 &&
		data[8] === 0x57 &&
		data[9] === 0x45 &&
		data[10] === 0x42 &&
		data[11] === 0x50
	) {
		return "image/webp";
	}

	return "image/png";
}
