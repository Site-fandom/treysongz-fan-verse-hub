
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Image } from 'lucide-react';

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange, className }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageChange(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageChange(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    setPreview(null);
    onImageChange(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className={cn("w-full", className)}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />
      
      {!preview ? (
        <div 
          className={cn(
            "flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 transition-all cursor-pointer bg-muted/50",
            isDragging ? "border-primary bg-muted/70" : "border-muted",
          )}
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Image className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-center text-sm font-medium mb-1">
            Drag and drop your image here, or click to select
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Supports: JPG, PNG, GIF (Max 5MB)
          </p>
        </div>
      ) : (
        <div className="relative rounded-xl overflow-hidden group">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-auto object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button 
              variant="destructive" 
              size="sm" 
              onClick={handleRemove}
              className="font-medium"
            >
              Remove Image
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
