task :default do
  Dir["jspec/*_spec.js"].each do |f|
    puts `webr jasmine #{f}`
  end
end
